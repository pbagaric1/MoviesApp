﻿using MoviesApp.MVC.AutomapperConfig;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace MoviesApp.API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            MappingInit.RegisterMaps();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
