using System.Collections.Generic;

namespace Domain
{
    public class Student : Entity
    {
        public string Name { get; set; }

        public string Program { get; set; }

        public virtual ICollection<Instructor> Instructors { get; set; } = new List<Instructor>();

        public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
    }
}
