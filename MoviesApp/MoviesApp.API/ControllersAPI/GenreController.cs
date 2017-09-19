using AutoMapper;
using GenresApp.Repository;
using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using MoviesApp.MVC.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace GenresApp.MVC.ControllersAPI
{
    [RoutePrefix("api/genre")]
    public class GenreController : ApiController
    {
        //private GenreRepository GenreRepo;
        GenreRepository GenreRepo = new GenreRepository();

        [Route("getall")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetAll()
        {
            try
            {
                var entity = await GenreRepo.GetAll();
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
                var entity = await GenreRepo.Get(id);
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not found.");
            }
        }
        [Authorize (Roles = "admin")]
        [Route("add")]
        [HttpPost]
        public async Task<HttpResponseMessage> Add(Genre genre)
        {
            try
            {
                //Genre.Id = Guid.NewGuid();
                var entity = await GenreRepo.Add(genre);
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
            }

        }

        [Authorize(Roles = "admin")]
        [Route("delete")]
        [HttpDelete]
        public async Task<HttpResponseMessage> Delete(Guid id)
        {
            try
            {
                var entity = await GenreRepo.Delete(id);
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Error");
            }
        }

        [Authorize(Roles = "admin")]
        [Route("edit")]
        [HttpPut]
        public async Task<HttpResponseMessage> Edit(Genre Genre)
        {
            try
            {
                var toBeUpdated = await GenreRepo.Get(Genre.Id);

                if (toBeUpdated == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Entry not found");

                toBeUpdated.Type = Genre.Type;

                var response = await GenreRepo.Update(toBeUpdated);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Wrong input.");
            }
        }
    }
}
