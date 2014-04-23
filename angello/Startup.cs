using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angello.Startup))]
namespace angello
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
