using MoviesApp.DAL.Models;
using MoviesApp.DAL.Models.Mapping;
using MoviesApp.Repository;
using Newtonsoft.Json.Linq;
using RatingsApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace MoviesApp.API.ControllersAPI
{
        [RoutePrefix("api/rating")]
        public class RatingController : ApiController
        {
            //private RatingRepository RatingRepo;
            RatingRepository RatingRepo = new RatingRepository();
            AuthRepository AuthRepo = new AuthRepository();
            MovieRepository MovieRepo = new MovieRepository();

        [Route("getall")]
            [HttpGet]
            public async Task<HttpResponseMessage> GetAll()
            {
                try
                {
                    var entity = await RatingRepo.GetAll();
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
                }
            }

            [Route("get")]
            [HttpGet]
            public async Task<HttpResponseMessage> Get(Guid id)
            {
                try
                {
                    var entity = await RatingRepo.Get(id);
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
                }
            }

            [Authorize]
            [Route("add")]
            [HttpPost]
            public async Task<HttpResponseMessage> Add(JObject data)
            {
                try
                {
                Movie movie= data["movie"].ToObject<Movie>();
                var userRated = data["userRated"].ToString();

                var user = await AuthRepo.GetByUsername(userRated);

                Rating rating = new Rating();
                rating.AspNetUserId = user.Id.ToString();
                rating.MovieId = movie.Id;
                

                var checkIfRated = await RatingRepo.CheckIfRated(rating.AspNetUserId, rating.MovieId);
                if(checkIfRated == null)
                {
                    //add to base if there's no such entry
                    rating.Id = Guid.NewGuid();
                    rating.UserRating = movie.Rating;

                    var RatingAdd = await RatingRepo.Add(rating);
                    var averageRatingAdd = await RatingRepo.GetAverageRating(movie.Id);
                    movie.NumberOfRatings++;
                    movie.Rating = averageRatingAdd;
                    var responseMovieAdd = await MovieRepo.Update(movie);
                    return Request.CreateResponse(HttpStatusCode.OK, responseMovieAdd);
                    
                }
                else {
                    //update existing entry
                    checkIfRated.UserRating = movie.Rating;
                    var RatingUpdate = await RatingRepo.Update(checkIfRated);

                    var averageRatingUpdate = await RatingRepo.GetAverageRating(movie.Id);
                    movie.Rating = averageRatingUpdate;
                    var responseMovieAdd = await MovieRepo.Update(movie);
                    return Request.CreateResponse(HttpStatusCode.OK, responseMovieAdd);

                }
                
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
                }

            }

        [Route("getuserrating")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetUserRating(Guid movieId, string userRated)
        {
            try
            {


                var user = await AuthRepo.GetByUsername(userRated);

                var response = await RatingRepo.GetUserRating(user.Id, movieId);

                return Request.CreateResponse(HttpStatusCode.OK, response);

            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
            }

        }

        [Route("delete")]
            [HttpDelete]
            public async Task<HttpResponseMessage> Delete(Guid id)
            {
                try
                {
                    var entity = await RatingRepo.Delete(id);
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
                }
            }

            [Route("edit")]
            [HttpPut]
            public async Task<HttpResponseMessage> Edit(Rating Rating)
            {
                try
                {
                    var toBeUpdated = await RatingRepo.Get(Rating.Id);

                    if (toBeUpdated == null)
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Entry not found");

                    toBeUpdated.UserRating = Rating.UserRating;

                    var response = await RatingRepo.Update(toBeUpdated);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Wrong input.");
                }
            }
        }
}