using Application.Charts;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Controllers
{
    public class ChartsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Chart>>> List() =>
            await Mediator.Send(new GetList.Query());
    }
}
