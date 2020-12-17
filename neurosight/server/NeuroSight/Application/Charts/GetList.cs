using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Charts
{
    public class GetList
    {
        public class Query : IRequest<List<Chart>> { }

        public class Handler : IRequestHandler<Query, List<Chart>>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<List<Chart>> Handle(Query request, CancellationToken cancellationToken)
            {
                var charts = await _context.Charts.Take(6).ToListAsync();

                return charts;
            }
        }
    }
}
