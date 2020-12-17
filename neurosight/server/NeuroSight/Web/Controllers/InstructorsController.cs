using Application.Instructors;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Controllers
{
    public class InstructorsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Instructor>>> List() =>
            await Mediator.Send(new GetList.Query());

        [HttpGet("{id}")]
        public async Task<ActionResult<Instructor>> Details(int id) =>
            await Mediator.Send(new GetDetails.Query { Id = id });
    }
}
