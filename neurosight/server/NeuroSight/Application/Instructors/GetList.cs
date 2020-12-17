using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Instructors
{
    public class GetList
    {
        public class Query : IRequest<List<Instructor>> { }

        public class Handler : IRequestHandler<Query, List<Instructor>>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<List<Instructor>> Handle(Query request, CancellationToken cancellationToken)
            {
                var instructors = await _context.Instructors.ToListAsync();

                return instructors;
            }
        }
    }
}
