using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCoffeShopDotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PollingController : ControllerBase
    {
        public PollingController()
        {

        }

        public async Task<IActionResult> PollingMyCoffee()
        {
            throw new NotImplementedException();
        }
    }
}
