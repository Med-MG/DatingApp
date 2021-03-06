using System;
using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class User
    {
        public int id { get; set; }
        public string username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Intrests { get; set; }
        public string city { get; set; }
        public string Country { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}