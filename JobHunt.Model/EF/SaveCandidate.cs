//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace JobHunt.Model.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class SaveCandidate
    {
        public int SaveCandidateId { get; set; }
        public Nullable<int> SC_RecruitId { get; set; }
        public Nullable<int> SC_CandidateId { get; set; }
    
        public virtual Candidate Candidate { get; set; }
        public virtual Recruit Recruit { get; set; }
    }
}