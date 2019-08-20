namespace Iwant.Models
{
    public class VComment
    {
        public Publisher Publisher { get; set; }
        public string Date { get; set; }
        public string Comment { get; set; }
        public int Likes { get; set; }
    }

    public class Publisher
    {
        public string Logo { get; set; }
        public string Name { get; set; }
    }
}