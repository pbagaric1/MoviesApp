using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.MVC.AutomapperConfig
{
    static public class MappingInit
    {
        static public void RegisterMaps()
        {
            Mapper.Initialize(cfg =>
                    cfg.AddProfiles(new[] {
                    typeof(MoviesApp.MVC.AutomapperConfig.Mapping),
                    typeof(Mapping)
            })
        );
        }
    }
}