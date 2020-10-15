using System.Web;
using System.Web.Mvc;
using WaterRemedy.Utility;

namespace WaterRemedy
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new Authentication("MA32", "Jedi"));
        }
    }
}
