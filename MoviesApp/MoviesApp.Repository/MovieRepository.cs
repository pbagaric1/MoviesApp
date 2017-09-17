using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesApp.Repository
{
    public class MovieRepository
    {
        //private readonly MoviesAppContext Context;
        MoviesAppDatabaseContext Context = new MoviesAppDatabaseContext();
        private GenericRepository genRepo = new GenericRepository();
        //MoviesAppContext Context = new MoviesAppContext();

        public async Task<int> Add(Movie entity)
        {
            try
            {
                Context.Set<Movie>().Add(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete(Movie entity)
        {
            try
            {
                Context.Set<Movie>().Remove(entity);
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
                Movie entity = await Get(id);
                Context.Set<Movie>().Remove(entity);
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
                Movie entity = await Get(id);
                Context.Set<Movie>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Movie> Get(string id)
        {
            try
            {
                var response = await Context.Set<Movie>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Movie> Get(Guid id)
        {
            try
            {
                var response = await Context.Set<Movie>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Movie>> GetAll()
        {
            try
            {
                var response = await Context.Set<Movie>().ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Movie>> GetAllOrderedByRating()
        {
            try
            {
                var response = await Context.Set<Movie>().OrderByDescending(x => x.Rating).ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Update(Movie entity)
        {
            try
            {
                Context.Set<Movie>().AddOrUpdate(entity);
                var response = await Context.SaveChangesAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public async Task<int> SaveChanges()
        {
            try
            {
                var response = await Context.SaveChangesAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }

        }

    }
}
