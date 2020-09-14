using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WaterRemedy.Models;

namespace WaterRemedy.Controllers
{
    public class RainfallsController : Controller
    {
        private waterremedyModelContainer db = new waterremedyModelContainer();

        // GET: Rainfalls
        public ActionResult Index()
        {
            return View(db.RainfallSet.ToList());
        }

        // GET: Rainfalls/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rainfall rainfall = db.RainfallSet.Find(id);
            if (rainfall == null)
            {
                return HttpNotFound();
            }
            return View(rainfall);
        }

        // GET: Rainfalls/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Rainfalls/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,month,rainfall_day,rainfall_month,possibility,storage_month,indoor_req,outdoor_req")] Rainfall rainfall)
        {
            if (ModelState.IsValid)
            {
                db.RainfallSet.Add(rainfall);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(rainfall);
        }

        // GET: Rainfalls/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rainfall rainfall = db.RainfallSet.Find(id);
            if (rainfall == null)
            {
                return HttpNotFound();
            }
            return View(rainfall);
        }

        // POST: Rainfalls/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,month,rainfall_day,rainfall_month,possibility,storage_month,indoor_req,outdoor_req")] Rainfall rainfall)
        {
            if (ModelState.IsValid)
            {
                db.Entry(rainfall).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(rainfall);
        }

        // GET: Rainfalls/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rainfall rainfall = db.RainfallSet.Find(id);
            if (rainfall == null)
            {
                return HttpNotFound();
            }
            return View(rainfall);
        }

        // POST: Rainfalls/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Rainfall rainfall = db.RainfallSet.Find(id);
            db.RainfallSet.Remove(rainfall);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
