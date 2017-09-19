using AutoMapper;
using MoviesApp.API;
using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using MoviesApp.DAL.Models.Mapping;
using MoviesApp.MVC.ViewModels;
using MoviesApp.Repository;
using Newtonsoft.Json.Linq;
using RatingsApp.Repository;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MoviesApp.MVC.ControllersAPI
{
    [RoutePrefix("api/movie")]
    public class MovieController : ApiController
    {
        //private MovieRepository MovieRepo;
        MovieRepository MovieRepo = new MovieRepository();
        AuthRepository AuthRepo = new AuthRepository();
        RatingRepository RatingRepo = new RatingRepository();

        [Route("getall")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetAll()
        {
            try
            {
                var entity = await MovieRepo.GetAll();
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
            }
        }

        [Route("bestrated")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetAllOrderedByRating()
        {
            try
            {
                var entity = await MovieRepo.GetAllOrderedByRating();
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
            }
        }

        [Route("getallusers")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetAllUsers()
        {
            try
            {
                var entity = await AuthRepo.GetAll();
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
            }
        }

        [Route("getuserby")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetUserBy(string username)
        {
            try
            {
                var entity = await AuthRepo.GetByUsername(username);
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
                var entity = await MovieRepo.Get(id);
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
        public async Task<HttpResponseMessage> Add(Movie movie)
        {
            try
            {
                //var newMovie = new Movie();
                //newMovie.Id = movie.Id;
                //newMovie.Actors = movie.Actors;
                //newMovie.AddedBy = movie.AddedBy;
                //newMovie.Description = movie.Description;
                //newMovie.ImagePath = movie.ImagePath;
                //newMovie.Name = movie.Name;
                //newMovie.NumberOfRatings = movie.NumberOfRatings;
                //newMovie.Rating = movie.Rating;
                //newMovie.TimeOfAdding = movie.TimeOfAdding;
                //newMovie.GenreId = movie.GenreId;

                var entity = await MovieRepo.Add(movie);
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
            }

        }

        [Authorize]
        [Route("delete")]
        [HttpDelete]
        public async Task<HttpResponseMessage> Delete(Guid id, string user)
        {
            try
            {
                var toBeDeleted = await MovieRepo.Get(id);

                if (user!= "admin" && toBeDeleted.AddedBy != user)
                    return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Forbidden");
                var entity = await MovieRepo.Delete(id);
                var movieRatings = await RatingRepo.DeleteMoviesById(id);
                
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
            }
        }

        [Authorize]
        [Route("edit")]
        [HttpPut]
        public async Task<HttpResponseMessage> Edit(JObject data)
        {
            try
            {
                Movie movie = data["movie"].ToObject<Movie>();
                string user = data["user"].ToString();

                var toBeUpdated = await MovieRepo.Get(movie.Id);

                if (toBeUpdated == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Entry not found");

                if (user != "admin" && toBeUpdated.AddedBy != user)
                    return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Forbidden");

                toBeUpdated.Name = movie.Name;
                toBeUpdated.Description = movie.Description;
                toBeUpdated.ImagePath = movie.ImagePath;
                toBeUpdated.Actors = movie.Actors;
                toBeUpdated.GenreId = movie.GenreId;
                //toBeUpdated.NumberOfRatings = movie.NumberOfRatings;
                //toBeUpdated.Rating = movie.Rating;
                //toBeUpdated.RatedBy = movie.RatedBy;

                var response = await MovieRepo.Update(toBeUpdated);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Wrong input.");
            }
        }

        [Authorize]
        [Route("editrating")]
        [HttpPut]
        public async Task<HttpResponseMessage> EditRating(JObject data)
        {
            try
            {
                //Object newObject = new Object();
                Movie movie = data["movie"].ToObject<Movie>();
                Object userRated = data["userRated"].ToObject<Object>();
                string userToAdd = userRated.ToString();

                //var userToBeUpdated = await AuthRepo.GetByUsername(userToAdd);

                var toBeUpdated = await MovieRepo.Get(movie.Id);

                if (toBeUpdated == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Entry not found");

                var ratingToBeAdded = (toBeUpdated.NumberOfRatings * toBeUpdated.Rating + movie.Rating) / (toBeUpdated.NumberOfRatings + 1);
                toBeUpdated.NumberOfRatings++;
                toBeUpdated.Rating = ratingToBeAdded;
                //toBeUpdated.RatedBy.Add(userToAdd);


                var response = await MovieRepo.Update(toBeUpdated);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Wrong input.");
            }
        }
    }
}