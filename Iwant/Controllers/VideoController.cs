using System.Collections.Generic;
using Iwant.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Windows.Input;
namespace Iwant.Controllers
{
    public class VideoController : Controller
    {
        public IActionResult Index()
        {
            var list = new List<Video>();
            string jsonFile = System.IO.File.ReadAllText(@"wwwroot/videos.json");
            list= JsonConvert.DeserializeObject<List<Video>>(jsonFile);
                return View(list);
        }
    }
}