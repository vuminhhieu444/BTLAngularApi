using System;
using System.Collections.Generic;

#nullable disable

namespace BaiTapLonAPI.Models
{
    public partial class LoaiTuiXach
    {
        public LoaiTuiXach()
        {
            TuiXaches = new HashSet<TuiXach>();
        }

        public int MaLoaiTuiXach { get; set; }
        public string TenLoai { get; set; }
        public string MoTa { get; set; }

        public virtual ICollection<TuiXach> TuiXaches { get; set; }
    }
}
