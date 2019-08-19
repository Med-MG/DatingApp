namespace DatingApp.API.Models
{
    public class User
    {
        public int id { get; set; }
        public string username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}