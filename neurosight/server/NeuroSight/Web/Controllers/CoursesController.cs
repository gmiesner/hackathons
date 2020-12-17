using Application.Courses;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Controllers
{
    public class CoursesController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Course>>> List() =>
            await Mediator.Send(new GetList.Query());

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> Details(int id) =>
            await Mediator.Send(new GetDetails.Query { Id = id });

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command) =>
            await Mediator.Send(command);
    }
}
