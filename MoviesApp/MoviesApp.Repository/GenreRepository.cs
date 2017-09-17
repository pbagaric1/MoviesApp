using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenresApp.Repository
{
    public class GenreRepository
    {
        MoviesAppDatabaseContext Context = new MoviesAppDatabaseContext();
        //MoviesAppContext Context = new MoviesAppContext();

        public async Task<int> Add(Genre entity)
        {
            try
            {
                Context.Set<Genre>().Add(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete(Genre entity)
        {
            try
            {
                Context.Set<Genre>().Remove(entity);
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
                Genre entity = await Get(id);
                Context.Set<Genre>().Remove(entity);
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
                Genre entity = await Get(id);
                Context.Set<Genre>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Genre> Get(string id)
        {
            try
            {
                var response = await Context.Set<Genre>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<Genre> Get(Guid id)
        {
            try
            {
                var response = await Context.Set<Genre>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Genre>> GetAll()
        {
            try
            {
                var response = await Context.Set<Genre>().ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public IQueryable<Genre> GetQueryable()
        {
            try
            {
                return Context.Set<Genre>();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Update(Genre entity)
        {
            try
            {
                Context.Set<Genre>().AddOrUpdate(entity);
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
