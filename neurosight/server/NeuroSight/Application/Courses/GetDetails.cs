using Application.Errors;
using Domain;
using MediatR;
using Persistence;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Courses
{
    public class GetDetails
    {
        public class Query : IRequest<Course>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Course>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Course> Handle(Query request, CancellationToken cancellationToken)
            {
                var course = await _context.Courses.FindAsync(request.Id);

                if (course == null)
                {
                    throw new WebApiException(HttpStatusCode.NotFound, new
                    {
                        course = "Not Found"
                    });
                }

                return course;
            }
        }
    }
}
