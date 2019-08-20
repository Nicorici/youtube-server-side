using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwant.Models
{
    public class Video
    {
            public string Title { get; set; }
            public string Thumbnail { get; set; }
            public string Source { get; set; }
            public string Publisher { get; set; }
            public string Views { get; set; }
            public string pathToComments { get; set; }
            public string Likes { get; set; }
            public string Dislikes { get; set; }
            public string Description { get; set; }
            public string Date { get; set; }
            public List<VComment> Comments { get => GetComments();}

        private List<VComment> GetComments()
        {
            string jsonFile = System.IO.File.ReadAllText($"wwwroot\\{pathToComments}");
            return JsonConvert.DeserializeObject<List<VComment>>(jsonFile);
        }
    }
}
