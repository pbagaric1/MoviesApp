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
    public class GenericRepository
    {
        MoviesAppDatabaseContext Context = new MoviesAppDatabaseContext();
        //MoviesAppContext Context = new MoviesAppContext();

        public async Task<int> Add<T>(T entity) where T : class
        {
            try
            {
                Context.Set<T>().Add(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete<T>(T entity) where T : class
        {
            try
            {
                Context.Set<T>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete<T>(string id) where T : class
        {
            try
            {
                T entity = await Get<T>(id);
                Context.Set<T>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Delete<T>(Guid id) where T : class
        {
            try
            {
                T entity = await Get<T>(id);
                Context.Set<T>().Remove(entity);
                return await Context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<T> Get<T>(string id) where T : class
        {
            try
            {
                var response = await Context.Set<T>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<T> Get<T>(Guid id) where T : class
        {
            try
            {
                var response = await Context.Set<T>().FindAsync(id);
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<T>> GetAll<T>() where T : class
        {
            try
            {
                var response = await Context.Set<T>().ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public IQueryable<T> GetQueryable<T>() where T : class
        {
            try
            {
                return Context.Set<T>();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<int> Update<T>(T entity) where T : class
        {
            try
            {
                Context.Set<T>().AddOrUpdate(entity);
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
