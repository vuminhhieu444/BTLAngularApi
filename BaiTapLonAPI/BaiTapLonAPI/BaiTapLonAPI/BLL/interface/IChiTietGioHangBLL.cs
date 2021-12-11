using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaiTapLonAPI.BLL
{
    public interface IChiTietGioHangBLL
    {
        public void addChiTietGioHang(string MaGioHang, string MaTuiXach, string DonGia, string soluong);
    }
}
