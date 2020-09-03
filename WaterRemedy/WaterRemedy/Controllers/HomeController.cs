using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WaterRemedy.Utility;
using System.Net.Http;
using Newtonsoft.Json;

namespace WaterRemedy.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult homePage() {

            return View();
        }

        // testing
        [HttpGet]
        public ActionResult GetAustralianWaterUsage()
        {
            try
            {
                var directoryInfo = new DirectoryInfo(StaticFilePath.LocalFilePath);
                var fileInfo = directoryInfo.GetFiles().FirstOrDefault(x => x.Name.Equals("Aus_Water_Usage.csv"));
                if (fileInfo == null) return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = "No Data" }), "application/json");

                var process = new ImportCSV($@"{fileInfo.DirectoryName}\", fileInfo.Name);
                var data = process.ReadCsvFileToTable();

                return Content(JsonConvert.SerializeObject(new { isSuccess = true, Data = data }), "application/json");                
            }
            catch (Exception e)
            {
                return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = e.Message }), "application/json");
            }
        }

        [HttpGet]
        public ActionResult GetWaterChemical()
        {
            try
            {
                var directoryInfo = new DirectoryInfo(StaticFilePath.LocalFilePath);
                var fileInfo = directoryInfo.GetFiles().FirstOrDefault(x => x.Name.Equals("Melbourne_water_chemical.csv"));
                if (fileInfo == null) return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = "No Data" }), "application/json");

                var process = new ImportCSV($@"{fileInfo.DirectoryName}\", fileInfo.Name);
                var data = process.ReadCsvFileToTable();

                return Content(JsonConvert.SerializeObject(new { isSuccess = true, Data = data }), "application/json");
            }
            catch (Exception e)
            {
                return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = e.Message }), "application/json");
            }
        }

        [HttpGet]
        public ActionResult GetVicWaterUsage()
        {
            try
            {
                var directoryInfo = new DirectoryInfo(StaticFilePath.LocalFilePath);
                var fileInfo = directoryInfo.GetFiles().FirstOrDefault(x => x.Name.Equals("Victoria_Water_usage.csv"));
                if (fileInfo == null) return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = "No Data" }), "application/json");

                var process = new ImportCSV($@"{fileInfo.DirectoryName}\", fileInfo.Name);
                var data = process.ReadCsvFileToTable();

                return Content(JsonConvert.SerializeObject(new { isSuccess = true, Data = data }), "application/json");
            }
            catch (Exception e)
            {
                return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = e.Message }), "application/json");
            }
        }

        [HttpGet]
        public ActionResult GetVicWaterUsagePc()
        {
            try
            {
                var directoryInfo = new DirectoryInfo(StaticFilePath.LocalFilePath);
                var fileInfo = directoryInfo.GetFiles().FirstOrDefault(x => x.Name.Equals("Aus_Water_Usage_pc.csv"));
                if (fileInfo == null) return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = "No Data" }), "application/json");

                var process = new ImportCSV($@"{fileInfo.DirectoryName}\", fileInfo.Name);
                var data = process.ReadCsvFileToTable();

                return Content(JsonConvert.SerializeObject(new { isSuccess = true, Data = data }), "application/json");
            }
            catch (Exception e)
            {
                return Content(JsonConvert.SerializeObject(new { isSuccess = false, Message = e.Message }), "application/json");
            }
        }

        public ActionResult chemicalView()
        {
            return View();
        }

        public ActionResult AusWaterUsage()
        {
            return View();
        }

        public ActionResult PercentageOfUsage()
        {
            return View();
        }
        public ActionResult MelWaterUsage()
        {
            return View();
        }

        public ActionResult Instruction()
        {
            return View();
        }

        public ActionResult HomeMap()
        {
            return View();
        }

        public ActionResult StatisticsForWaterUsageAndChemicals()
        {
            return View();
        }

        public ActionResult WaterQualityAndPollution()
        {
            return View();
        }

        public ActionResult GrowthOfUsage()
        {
            return View();
        }
    }
}