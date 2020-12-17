using Domain;
using System.Collections.Generic;
using System.Linq;

namespace Persistence
{
    public class DbContextSeeder
    {
        public static void Seed(ApplicationDbContext context)
        {
            if (!context.Courses.Any())
            {
                var courses = new List<Course>
                {
                    new Course
                    {
                        Title = "Calculus I",
                        Description = "Hardcore math",
                        Label = "calculus-one",
                        Image = "/images/calculusI.jpg"
                    },
                    new Course
                    {
                        Title = "General Chemistry I",
                        Label = "general-chemistry",
                        Description = "Hardcore chemistry",
                        Image = "/images/generalchemistry.jpg"
                    }
                };

                context.Courses.AddRange(courses);
                context.SaveChanges();
            }

            if (!context.Instructors.Any())
            {
                var instructors = new List<Instructor>
                {
                    new Instructor
                    {
                        Name = "John Doe",
                        Course = "General Chemistry I",
                        Image = "john-doe"
                    },
                    new Instructor
                    {
                        Name = "Jane Doe",
                        Course = "Calulus I",
                        Image = "jane-doe"
                    }
                };

                context.Instructors.AddRange(instructors);
                context.SaveChanges();
            }

            if (!context.Students.Any())
            {
                var students = new List<Student>
                {
                    new Student
                    {
                        Name = "John Doe",
                        Program = "Computer Science"
                    },
                    new Student
                    {
                        Name = "Jane Doe",
                        Program = "Data Science"
                    }
                };

                context.Students.AddRange(students);
                context.SaveChanges();
            }

            if (!context.Charts.Any())
            {
                var charts = new List<Chart>
                {
                    new Chart
                    {
                        Title = "Exam One and Two Grades",
                        Feedback = "This histogram shows the individual grades for exam one and exam two. The y-axis is the number of students that received that grade, so the taller a section, the more people who received that grade. The x-axis is the grades, from 0% to a 100%. Exam One is the tan colored graph and the teal colored graph is Exam Two. "
                    },
                    new Chart
                    {
                        Title = "Exam One Grades",
                        Feedback = "This histogram shows the individual grades for exam one. The y-axis is the number of students that received that grade, so the taller a section, the more people who received that grade. The x-axis is the grades, from 0% to a 100%. "
                    },
                    new Chart
                    {
                        Title = "Exam Two Grades ",
                        Feedback = "This histogram shows the individual grades for exam two. The y-axis is the number of students that received that grade, so the taller a section, the more people who received that grade. The x-axis is the grades, from 0% to a 100%."
                    },
                    new Chart
                    {
                        Title = "Exam 1 & 2 Exam Grade v. Percent Attendance",
                        Feedback = "This scatter plot shows the individual grades for exam one and two. The y-axis is percent that the student attended class and the x-axis is the grade that the student received. The higher a point is vertically, the more the student attended class, the farther right a point is, the higher the grade. The teal color represents exam one and the tan color represents exam two."
                    },
                    new Chart
                    {
                        Title = "Exam 1 Exam Grade v. Percent Attendance",
                        Feedback = "This scatter plot shows the individual grades for exam one. The y-axis is percent that the student attended class and the x-axis is the grade that the student received. The higher a point is vertically, the more the student attended class, the farther right a point is, the higher the grade."
                    },
                    new Chart
                    {
                        Title = "Exam 2 Exam Grade v. Percent Attendance",
                        Feedback = "This scatter plot shows the individual grades for exam two. The y-axis is percent that the student attended class and the x-axis is the grade that the student received. The higher a point is vertically, the more the student attended class, the farther right a point is, the higher the grade."
                    },
                    new Chart
                    {
                        Title = "Time Spent Studying v. Exam Grade",
                        Feedback = "This scatter plot shows the individuals grades for exam one. The y-axis is the hours the student spent studying for the exam and the x-axis is the garde that the student received. The higher a point is vertically, the more the student studied and the farther right a point is, the higher the grade for the exam is."
                    },
                };

                context.Charts.AddRange(charts);
                context.SaveChanges();
            }

            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "A Look Behind the Scenes",
                        Description = "Hear how HubSpot’s VP of Marketing approaches advertising creative to reach and engage audiences",
                        Url = "https://offers.hubspot.com/behind-the-screens?hubs_signup-url=www.hubspot.com%2Fresources%2Fwebinar&hubs_signup-cta=directories__link&_ga=2.71791379.1872473809.1607187931-658175164.1606816925",
                        Image = "a-look-behind-the-scenes.png"
                    },
                    new Activity
                    {
                        Title = "Digital Agency Day 2021",
                        Description = "Register now to watch virtual workshops with top agency experts. Learn about the newest trends in agency growth, the importance of agencies in the marketplace today….. and much more!",
                        Url = "https://offers.hubspot.com/digital-agency-day?hubs_signup-url=www.hubspot.com%2Fresources%2Fwebinar&hubs_signup-cta=directories__link&_ga=2.138187952.1872473809.1607187931-658175164.1606816925",
                        Image = "digital-agency-day-2021.png"
                    }
                };

                context.Activities.AddRange(activities);
                context.SaveChanges();
            }
        }
    }
}
