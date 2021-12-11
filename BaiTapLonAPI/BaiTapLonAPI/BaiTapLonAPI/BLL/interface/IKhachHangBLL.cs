using BaiTapLonAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaiTapLonAPI.BLL
{
    public interface IKhachHangBLL
    {

        List<KhachHang> getAllKhachHang();
        public void addKhachHang(string TenKhachHang, string SoDienThoai, string Email, string DiaChi);
    }
}
