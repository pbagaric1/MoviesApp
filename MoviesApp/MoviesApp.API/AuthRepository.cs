﻿using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MoviesApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using MoviesApp.DAL;
using MoviesApp.Repository;
using System.Data.Entity;
using MoviesApp.DAL.Models;

namespace MoviesApp.API
{
    public class AuthRepository : IDisposable
    {
        //private MoviesAppContext _ctx;
        private AuthContext _ctx;

        private UserManager<IdentityUser> _userManager;
        private GenericRepository genRepo = new GenericRepository();

        public AuthRepository()
        {
            _ctx = new AuthContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
        }

        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            IdentityUser user = new IdentityUser
            {
                UserName = userModel.UserName
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser user = await _userManager.FindAsync(userName, password);

            return user;
        }

        public async Task<IEnumerable<AspNetUser>> GetAll()
        {
            try
            {
                var response = await _ctx.Set<AspNetUser>().ToListAsync();
                return response;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<AspNetUser> GetByUsername(string username)
        {
            try
            {
                //IdentityUser user = await _userManager.FindByNameAsync(username);

                //return user;
                var response = (await genRepo
                    .GetQueryable<AspNetUser>().Where(x => x.UserName == username).FirstOrDefaultAsync());
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();

        }
    }
}