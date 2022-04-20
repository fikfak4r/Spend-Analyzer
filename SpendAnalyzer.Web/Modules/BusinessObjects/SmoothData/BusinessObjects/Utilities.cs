using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Data;
using System.Linq;
using System.Data.SqlClient;
using System.Data;

namespace SmoothData.BusinessObjects
{
    public class Utilities
    {
        public static class GetNextNumberHelper
        {
            public static BusinessObjects.GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
            {

                connection.Open();
                SqlText sqlText = new SqlText(connection, "SELECT Cnt FROM QryCnt");
                
                object obj = sqlText.ExecuteScalar();
                int cnt = 0;

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    cnt = Convert.ToInt32(obj);
                }


                sqlText.ExecuteNonQuery("UPDATE QryCnt Set Cnt = (SELECT Cnt FROM QryCnt) + 1");
                connection.Close();

                var prefix = request.Prefix ?? "";

                //var max = connection.Query<string>(new SqlQuery()
                //    .From(field.Fields)
                //    .Select(Sql.Max(field.Expression))
                //    .Where(
                //        field.StartsWith(prefix) &&
                //        field >= prefix.PadRight(request.Length, '0') &&
                //        field <= prefix.PadRight(request.Length, '9')))
                //    .FirstOrDefault();

                var response = new BusinessObjects.GetNextNumberResponse();

                //long l;
                //response.Number = cnt == null ||
                //    !long.TryParse(max.Substring(prefix.Length), out l) ? 1 : l + 1;

                response.Number = cnt;

                response.Serial = prefix + response.Number.ToString()
                    .PadLeft(request.Length - prefix.Length, '0');

                return response;
            }
        }

    }
}
