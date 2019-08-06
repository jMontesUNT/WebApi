using FinalProject.Data;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FinalProject.Controllers
{
    [EnableCors("http://localhost:4200", "*","*")]
    public class EmployeesController : ApiController
    {

        [HttpGet]
        public IHttpActionResult getEmployee(int id)
        {
            try
            {
                using (var context = new AppDbContext()) // open connection to DB
                {
                    var employee = context.Employees.FirstOrDefault(n=>n.Id == id); // get entries
                    if (employee == null) return NotFound();

                    return Ok(employee);   // return Ok request
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // return bad request
            }
        }

        [HttpGet]
        public IHttpActionResult getEmployees()
        {
            try
            {
                using (var context = new AppDbContext()) // open connection to DB
                {
                    var employees = context.Employees.ToList(); // get entries
                    return Ok(employees);   // return Ok request
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); // return bad request
            }
        }

        [HttpPost]
        public IHttpActionResult PostEmployee([FromBody]Employee employee)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                using (var context = new AppDbContext())
                {
                    context.Employees.Add(employee);
                    context.SaveChanges();

                    return Ok("Employee was created.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IHttpActionResult updateEmployee(int id, [FromBody]Employee employee)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (id != employee.Id) return BadRequest();

            try
            {
                using (var context = new AppDbContext())
                {
                    var oldEmployee = context.Employees.FirstOrDefault(n => n.Id == id);

                    if (oldEmployee == null) return NotFound();

                    oldEmployee.EmployeeName = employee.EmployeeName;
                    oldEmployee.EmployeeType = employee.EmployeeType;
                    oldEmployee.IsActive = employee.IsActive;

                    context.SaveChanges();
                    return Ok("Entry updated.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpDelete]
        public IHttpActionResult deleteEmployee(int id)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var employee = context.Employees.FirstOrDefault(n => n.Id == id);

                    if (employee == null) return NotFound();

                    context.Employees.Remove(employee);
                    context.SaveChanges();

                    return Ok("Employee Deleted");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}