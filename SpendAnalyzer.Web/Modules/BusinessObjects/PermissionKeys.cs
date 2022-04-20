using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpendAnalyzer.BusinessObjects
{
    public class PermissionKeys
    {

        public class Bank
        {
            public const string Read = "SpendAnalyzer:Bank:Read";
            public const string Insert = "SpendAnalyzer:Bank:Insert";
            public const string Update = "SpendAnalyzer:Bank:Update";
            public const string Delete = "SpendAnalyzer:Bank:Delete";
        }

    }
}
