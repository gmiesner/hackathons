using System;
using System.Net;

namespace Application.Errors
{
    public class WebApiException : Exception
    {
        public WebApiException(HttpStatusCode statusCode, object error = null)
        {
            StatusCode = statusCode;
            Error = error;
        }

        public HttpStatusCode StatusCode { get; }

        public object Error { get; }
    }
}
