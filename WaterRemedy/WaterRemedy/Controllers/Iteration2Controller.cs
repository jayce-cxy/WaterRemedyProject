using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WaterRemedy.Models;
using WaterRemedy.Utility;
using Newtonsoft.Json;

namespace WaterRemedy.Controllers
{
    public class Iteration2Controller : Controller
    {

        private waterremedyModelContainer db = new waterremedyModelContainer();

        public ActionResult HomeIndex()
        {
            return View();
        }

        [HttpGet]
        public ActionResult LockPage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SubmitLockCode(string lockCode)
        {
            var baseLockCode = Encryption.GetLockCode();

            if (lockCode.Equals(baseLockCode)) return Content("/Iteration2/HomeIndex", "text/plain");

            return Content("/Iteration2/LockPage", "text/plain");
        }

        public ActionResult CatchmentInDanger()
        {
            return View();
        }

        public ActionResult AboutWater()
        {
            return View();
        }

        public ActionResult RoofWater()
        {
            DateTime dt = DateTime.Now;
            var currentMonth = dt.ToString("MMMM");
            var rainfallList = db.RainfallSet.ToList();
            var currentMonthIndoor = 0.0;
            var yearRainfall = 0.0;
            List<string> month = new List<string>();
            List<Double> storageMonth = new List<double>();

            List<Double> rainfallMonth = new List<Double>();
            List<Double> indoorRequired = new List<Double>();
            List<Double> outdoorRequired = new List<Double>();


            foreach (var item in rainfallList)
            {
                if (item.month.Equals(currentMonth))
                {
                    currentMonthIndoor = item.indoor_req;
                }
            }

            foreach (var a in rainfallList)
            {
                yearRainfall += a.rainfall_month;
                month.Add(a.month);
                storageMonth.Add(a.storage_month);
                rainfallMonth.Add(a.rainfall_month);
                indoorRequired.Add(a.indoor_req);
                outdoorRequired.Add(a.outdoor_req);
            }

            ViewBag.currentMonthIndoorReq = currentMonthIndoor;
            ViewBag.list = yearRainfall;
            ViewBag.rfmList = rainfallMonth;
            ViewBag.indoorReq = indoorRequired;
            ViewBag.outdoorReq = outdoorRequired;
            ViewBag.monthList = month;
            ViewBag.rlist = storageMonth;
            return View(db.RainfallSet.ToList());
        }


        public ActionResult DIYDetergent()
        {
            return View();
        }
    }
}