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
    public class LaundrySetsController : Controller
    {
        private waterremedyModelContainer db = new waterremedyModelContainer();

        // GET: LaundrySets
        public ActionResult Index()
        {
            return View(db.LaundrySet.ToList());
        }

        public ActionResult LaundryList()
        {
            return View(db.LaundrySet.ToList());
        }

        // GET: LaundrySets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LaundrySet laundrySet = db.LaundrySet.Find(id);
            if (laundrySet == null)
            {
                return HttpNotFound();
            }
            return View(laundrySet);
        }

        // GET: LaundrySets/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: LaundrySets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,chemical_name,harm,source")] LaundrySet laundrySet)
        {
            if (ModelState.IsValid)
            {
                db.LaundrySet.Add(laundrySet);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(laundrySet);
        }

        // GET: LaundrySets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LaundrySet laundrySet = db.LaundrySet.Find(id);
            if (laundrySet == null)
            {
                return HttpNotFound();
            }
            return View(laundrySet);
        }

        // POST: LaundrySets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,chemical_name,harm,source")] LaundrySet laundrySet)
        {
            if (ModelState.IsValid)
            {
                db.Entry(laundrySet).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(laundrySet);
        }

        // GET: LaundrySets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            LaundrySet laundrySet = db.LaundrySet.Find(id);
            if (laundrySet == null)
            {
                return HttpNotFound();
            }
            return View(laundrySet);
        }

        // POST: LaundrySets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            LaundrySet laundrySet = db.LaundrySet.Find(id);
            db.LaundrySet.Remove(laundrySet);
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

        public ActionResult Alternatives()
        {
            return View();
        }
    }
}
