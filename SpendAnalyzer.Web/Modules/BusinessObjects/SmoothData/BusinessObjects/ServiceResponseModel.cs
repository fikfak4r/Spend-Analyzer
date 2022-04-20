using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Services;


namespace SmoothData.BusinessObjects
{
    public class ServiceResponseModel
    {

    }

    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }

    }

}
