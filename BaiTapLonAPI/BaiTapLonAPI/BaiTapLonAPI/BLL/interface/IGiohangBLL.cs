using BaiTapLonAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaiTapLonAPI.BLL
{
    public interface IGiohangBLL
    {

        List<GioHang> getAllGioHang();
        public void addGioHang(string makhachhang, string ngaymua, string Tongtien);
    }
}
