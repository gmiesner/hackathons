using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Courses
{
    public class GetList
    {
        public class Query : IRequest<List<Course>> { }

        public class Handler : IRequestHandler<Query, List<Course>>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<List<Course>> Handle(Query request, CancellationToken cancellationToken)
            {
                var courses = await _context.Courses.ToListAsync();

                return courses;
            }
        }
    }
}
