using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;


namespace SmoothData.BusinessObjects
{
    public class SqlText
    {
        private string query;
        private IDbConnection connection;
        public SqlText(IDbConnection connection, string query)
        {
            this.query = query;
            this.connection = connection;
        }


        public IDataReader ExecuteReader()
        {
            IDbCommand comm = connection.CreateCommand();
            comm.CommandText = query;
            return comm.ExecuteReader();
        }

        public object ExecuteScalar()
        {
            IDbCommand comm = connection.CreateCommand();
            comm.CommandText = query;
            return comm.ExecuteScalar();
        }


        public void ExecuteNonQuery()
        {
            IDbCommand comm = connection.CreateCommand();
            comm.CommandText = query;
            comm.ExecuteNonQuery();
        }

        public void ExecuteNonQuery(string qry)
        {
            IDbCommand comm = connection.CreateCommand();
            comm.CommandText = qry;
            comm.ExecuteNonQuery();
        }
    }

}
