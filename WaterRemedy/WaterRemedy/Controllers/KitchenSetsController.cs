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
    public class KitchenSetsController : Controller
    {
        private waterremedyModelContainer db = new waterremedyModelContainer();

        // GET: KitchenSets
        public ActionResult Index()
        {
            return View(db.KitchenSet.ToList());
        }

        public ActionResult KitchenList()
        {
            return View(db.KitchenSet.ToList());
        }

        // GET: KitchenSets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KitchenSet kitchenSet = db.KitchenSet.Find(id);
            if (kitchenSet == null)
            {
                return HttpNotFound();
            }
            return View(kitchenSet);
        }

        // GET: KitchenSets/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: KitchenSets/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,chemical_name,harm,source")] KitchenSet kitchenSet)
        {
            if (ModelState.IsValid)
            {
                db.KitchenSet.Add(kitchenSet);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(kitchenSet);
        }

        // GET: KitchenSets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KitchenSet kitchenSet = db.KitchenSet.Find(id);
            if (kitchenSet == null)
            {
                return HttpNotFound();
            }
            return View(kitchenSet);
        }

        // POST: KitchenSets/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,chemical_name,harm,source")] KitchenSet kitchenSet)
        {
            if (ModelState.IsValid)
            {
                db.Entry(kitchenSet).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(kitchenSet);
        }

        // GET: KitchenSets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KitchenSet kitchenSet = db.KitchenSet.Find(id);
            if (kitchenSet == null)
            {
                return HttpNotFound();
            }
            return View(kitchenSet);
        }

        // POST: KitchenSets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            KitchenSet kitchenSet = db.KitchenSet.Find(id);
            db.KitchenSet.Remove(kitchenSet);
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
