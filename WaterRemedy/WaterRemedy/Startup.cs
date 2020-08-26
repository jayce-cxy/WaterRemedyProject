using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WaterRemedy.Startup))]
namespace WaterRemedy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
