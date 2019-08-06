using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FinalProject.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        public string EmployeeName { get; set; }
        public string EmployeeType { get; set; }
        public bool IsActive { get; set; }
    }
}