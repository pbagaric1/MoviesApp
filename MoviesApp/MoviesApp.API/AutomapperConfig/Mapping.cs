using AutoMapper;
using MoviesApp.DAL;
using MoviesApp.DAL.Models;
using MoviesApp.MVC.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.MVC.AutomapperConfig
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<MovieViewModel, Movie>().ReverseMap();
            CreateMap<GenreViewModel, Genre>().ReverseMap();

        }
    }
}