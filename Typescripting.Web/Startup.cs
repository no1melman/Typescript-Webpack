using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Typescripting.Web.Startup))]

namespace Typescripting.Web
{
    using System.Web.Http;

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfig = new HttpConfiguration();

            WebApiConfig.Register(httpConfig);

            app.UseWebApi(httpConfig);
        }
    }
}
