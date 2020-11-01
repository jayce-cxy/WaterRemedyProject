using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace WaterRemedy.Utility
{
    public static class StaticFilePath
    {
        public static string LocalFilePath = $@"{AppDomain.CurrentDomain.BaseDirectory}\App_Data";
    }

    public class ImportCSV
    {
        private string path;

        private string fileName;

        public ImportCSV(string filePath, string fileName)
        {
            this.path = filePath;
            this.fileName = fileName;
        }

        public DataTable ReadCsvFileToTable()
        {
            return ReadCsvFileToTable(true, ',');
        }

        public DataTable ReadCsvFileToTable(bool HeadYes, char span)
        {
            
            string files = path + fileName;
            DataTable dt = new DataTable();
            StreamReader fileReader = new StreamReader(files, Encoding.Default);
            try{
                int lsi = 0;
                char cv = span;
                while (fileReader.EndOfStream == false){
                    string line = fileReader.ReadLine();
                    string[] y = line.Split(cv);
                    if (HeadYes == true){
                        if (lsi == 0){
                            for (int i = 0; i < y.Length; i++){
                                dt.Columns.Add(y[i].Trim().ToString());
                            }
                            lsi++;
                        }else
                        {
                            DataRow dr = dt.NewRow();
                            for (int i = 0; i < y.Length; i++)
                            {
                                dr[i] = y[i].Trim();
                            }
                            dt.Rows.Add(dr);
                        }
                    }else{
                        if (lsi == 0){
                            for (int i = 0; i < y.Length; i++){
                                dt.Columns.Add(i.ToString());
                            }
                            lsi++;
                        }
                        DataRow dr = dt.NewRow();
                        for (int i = 0; i < y.Length; i++){
                            dr[i] = y[i].Trim();
                        }
                        dt.Rows.Add(dr);
                    }
                }
            }catch (Exception ex){
                throw ex;
            }
            finally{
                fileReader.Close();
                fileReader.Dispose();
            }
            return dt;
        }
    }
}