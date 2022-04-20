using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Services;


namespace SmoothData.BusinessObjects
{
    public class ServiceRequestModel
    {
  
    }

    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }
}
