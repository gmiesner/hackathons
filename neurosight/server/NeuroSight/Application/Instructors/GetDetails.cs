using Application.Errors;
using Domain;
using MediatR;
using Persistence;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
namespace Application.Instructors
{
    public class GetDetails
    {
        public class Query : IRequest<Instructor>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Instructor>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Instructor> Handle(Query request, CancellationToken cancellationToken)
            {
                var instructor = await _context.Instructors.FindAsync(request.Id);

                if (instructor == null)
                {
                    throw new WebApiException(HttpStatusCode.NotFound, new
                    {
                        instructor = "Not Found"
                    });
                }

                return instructor;
            }
        }
    }
}
