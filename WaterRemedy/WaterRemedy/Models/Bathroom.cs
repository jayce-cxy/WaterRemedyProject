//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WaterRemedy.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Bathroom
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Bathroom()
        {
            this.Bathproduct = new HashSet<Bathproduct>();
        }
    
        public int bath_id { get; set; }
        public string chemical_name { get; set; }
        public string harm { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Bathproduct> Bathproduct { get; set; }
    }
}
