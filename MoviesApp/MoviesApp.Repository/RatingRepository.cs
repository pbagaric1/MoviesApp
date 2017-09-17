using MoviesApp.DAL.Models;
using MoviesApp.DAL.Models.Mapping;
using MoviesApp.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RatingsApp.Repository
{
    public class RatingRepository
    {
        MoviesAppDatabaseContext Context = new MoviesAppDatabaseContext();
        private GenericRepository genRepo = new GenericRepository();
        //RatingsAppContext Context = new RatingsAppContext();

        public async Task<int> Add(Rating entity)
        {
            try
            {
                Context.Set<Rating>().Add(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete(Rating entity)
        {
            try
            {
                Context.Set<Rating>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete(string id)
        {
            try
            {
                Rating entity = await Get(id);
                Context.Set<Rating>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete(Guid id)
        {
            try
            {
                Rating entity = await Get(id);
                Context.Set<Rating>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Rating> CheckIfRated(string userId, Guid movieId)
        {
            try
            {
                var response = (await genRepo
                    .GetQueryable<Rating>().Where(x => x.AspNetUserId == userId &&
                     x.MovieId == movieId).FirstOrDefaultAsync());
                //if (Context.Ratings.Any(x => x.AspNetUserId == userId &&
                //     x.MovieId == movieId))
                //    return true;
                //else return false;

                    //var response = (await Context.Ratings.Where(x => x.AspNetUserId == userId &&
                    //     x.MovieId == movieId).FirstOrDefaultAsync());
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<float> GetUserRating(string userId, Guid movieId)
        {
            try
            {
                var response = (await genRepo
                    .GetQueryable<Rating>().Where(x => x.AspNetUserId == userId &&
                     x.MovieId == movieId).FirstOrDefaultAsync());

                if (response == null)
                    return 0;
                var userRating = response.UserRating;

                return userRating;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> DeleteMoviesById(Guid movieId)
        {
            try
            {
                var response = (await genRepo
                    .GetQueryable<Rating>().Where(x => x.MovieId == movieId).ToListAsync());

                foreach(Rating res in response)
                {
                    var toDelete = await Delete(res.Id);
                }
                    return await Context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Rating> Get(string id)
        {
            try
            {
                var response = await Context.Set<Rating>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Rating> Get(Guid id)
        {
            try
            {
                var response = await Context.Set<Rating>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Rating>> GetAll()
        {
            try
            {
                var response = await Context.Set<Rating>().ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public IQueryable<Rating> GetQueryable()
        {
            try
            {
                return Context.Set<Rating>();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Update(Rating entity)
        {
            try
            {
                Context.Set<Rating>().AddOrUpdate(entity);
                var response = await Context.SaveChangesAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public async Task<float> GetAverageRating(Guid id)
        {
            try
            {
                var totalRating = (await genRepo
                    .GetQueryable<Rating>().Where(x => x.MovieId == id).SumAsync(x => x.UserRating));
                var ratingsCount = (await genRepo
                    .GetQueryable<Rating>().Where(x => x.MovieId == id).CountAsync());
                var response = totalRating / ratingsCount;
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
