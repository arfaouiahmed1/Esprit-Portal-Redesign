// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1005
// FileVersion: 4.1.7.1005
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=Quevq61y9vRMwKIfSRc1YKtoerUoIs1NH6bHR97g07g6uUbTNHlQDJojxPq_tZ3SPjYTFkteLE8HlsHU9krlmR9MkD3DNmCRvbdifGPuvs1qAPeG27tvWsAD_qRPIGWkGYbmW3LMJ2giA_KKIQa9SA2&t=638723572529257489',
            GROUP: 'WebResource.axd?d=JSND7XgyUJ5I-E5ubtMafgwbkJVGah_jMVS1XFgLFbubfur5Yvy0Hhn5OMyiPKXvJSLBiSEgFgBhGn87MaGR4A4j-I74bSFWXX4vYOOsyJzkiM1p5KjsCRdnDNH1IjM61rO0jC0OZucxd6DKi7UBNin85gM2vPtwRBMfK6Sg2pE1&t=638723572529257489',
            HOVER: 'WebResource.axd?d=Zu4wYbyud6tpYUu1JiUV60WOBLeDqJ5TegxioUl7mhJLbhvGwmC-cethKj-8x6tdM8sEreSWKesfLy3aCj3EBh1tXxij7Zt8JgswFsWLsAB6lmqnCgqz9-MqvA25XmzfQblh8exLk5YMxVUzifF_CA2&t=638723572529257489',
            DOWN: 'WebResource.axd?d=N0OYQ3qL1Iem2URzmzWK9tP_5RKIHTUdqoQ4861GOXFBr3RhJB4kL1ITJ8AEYst5HeBKuevBqeM4agXAk_2YWzSra73VF0QW-VF86J9Mzpu4B4x8cBLA7baxi5NvIFU1c3zmIqERPkOLMtble9Bs2w2&t=638723572529257489'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=xj_VvoiOFOaPTbuXj5Bv8wmR4zhldSyLNjX3GnZxSN4xrfh0TnNo-if7cnLV_MI0p4ERk7KtuxyxLum2C-Qgk0AaCwXHRjWUG0vBdTPpuRN7qF-4esSxrihzCdj07A9OqBkDLd_AeGtJsmGACQ8uiQ2&t=638723572529257489',
            GROUP: 'WebResource.axd?d=BtPV7bpWu0AfsRQ-qGg7X0zcsg3fpzLXkeWvMgkcaupgyGQ97qp9M1Cw0Mg-YOlFYI9iiJEASOATRJ1_bz2BqNkHR_zKez2Aihh4mFDoSieDd6_1ByG3JQpyp1MbYJhLRAYEXFVXI4aU-uVrDIZAqJHsOsvUn5E7vPtHKXXuK3c1&t=638723572529257489',
            HOVER: 'WebResource.axd?d=w4NhAI63xpG2ZEAx8XIY-sJ9HJtqgBEKza5MQ92WV9qAUxygjK-evsJSeb4EtXxNJ2AOCJm6wUOgeSq2dF7XbRN2mLzG_afmAYuuLpkcP7TeqH2Kx1vv9qaOVA7xgnibEO77RjuinaMPVouWq7K7JA2&t=638723572529257489',
            DOWN: 'WebResource.axd?d=U5MfF16wz91veCXDNIsdSR8TldDjJKN4RneckL8gV31OBalsvmjk9w6_69-5npEZ32G1RirlB1LSnICNamK3feks2RGrNw6QYaW51l57Yu0xIgneNkIa-P2lGq1jMJ87sExnP42QmEtBLZROniirnxvfvZNxogp8J52ckkhnJk41&t=638723572529257489'
        },
        home: {
            REST: 'WebResource.axd?d=KP6VXMJ0ONvV-GBOP4Qi07AJW2qgpo0mujowtzj02i2YhQy7JJsswpW9To6WQpGLBEXFbNE4xL4M1CjnqdiYNgsRXzLh0VGhUCjTsBD37xQtP-QnsoRVNtrcAYWg6AC6xam4YBc4kGjlGSDaYN6fQw2&t=638723572529257489',
            GROUP: 'WebResource.axd?d=Ct7g7ORyPTBY-VwT_rMXlvHHNOG4x0h8k_jc-XoiMP19kkkKx_sh5I5zXCiX5Kii404gZ26dXpqz43rJxZZaO0xgNE_fgKXgbUg8qDjND8qCtPdvWKeX6DkYw5dOtfLR1CPwmBfokq2Ybbg3MWnBhZNtz2hzQX-2X5swDhcds-81&t=638723572529257489',
            HOVER: 'WebResource.axd?d=as3i3T7youX98As4Lev-dg9gikucw9VrPDqkQAuoxYY8Iv7cfYmbXt59BOJB_Bme4yQO3-RMrBXFDHuE_gRg5u8JYLFEE8wSJvqZnaVHuynVw8UUhMpeZrO_By5P4IwZhmESfiFBAoKy1Gq4_OgGYQ2&t=638723572529257489',
            DOWN: 'WebResource.axd?d=fs6CQRu6lu-6sr_hKizvUkDOeQcwIjeJtklwCFPcesnU384SE6hYlbOmhFYgwa73kxfKhhIq9rkVZFI1myWzUk-rmIXcv6KLO7cXn0Bjc-LFu1Got3RW7bBEkcHcIW4CpiHhUhD7wz2UcG4Y33zP6A2&t=638723572529257489'
        },
        fullpage: {
            REST: 'WebResource.axd?d=SZ7S0PK4IK_FS9uYsH6__3vD5FbidyjWj97iBhfzufYELy7eD-c5jfmtdx83QmRXYHMkD09RUK_l--e5QcaU0F0xiRr_OkyK-miNavJHplfhA3OKpdi9yL0poxVvyKZXKgsdBEJjHZqdHHjAxVsoLg2&t=638723572529257489',
            GROUP: 'WebResource.axd?d=XiyUQT1xY3wqw-7ujXSq-EzBWWq1JNAnhCJYSHZX3fVCRO8k9T2LfZs6vICoA4TALI5Fo6H5rzFdbLPPdPctqPuKzqXEA36UTSPKdyJYhTLGyV6hORq3EVYMErw24EVZWgG6G0vUNSjYfH5TVVLE1biorW2bws2gk67MUdLsWxw1&t=638723572529257489',
            HOVER: 'WebResource.axd?d=Mp_W1Kda3JBC6-97uXsdBn1aPD17hb2nLWlb-z8VxPZWfvtTYTCY8lP6X36CCeKYq0JKkKoys21-aGaKxrBNpXotxr-nKqek9C1q6YUjOw8XPD016jXZyIgUv0pgFIy4VmkOT4PeB7RFoPqPpG-_HQ2&t=638723572529257489',
            DOWN: 'WebResource.axd?d=n3TRon94vqmDQ31CJjjEZA5jJo3VS8DwNPtzh_D-N7xxGlg8ggMXLEmFiNGywU0f1g7Dr_ZSC1E7yROZFMMLO4jis6xJ5aci3vrZZlaYb6rq273iEJicApJ94hzehEuZ3lrv_PU-gWdvZEPbWlWMz_r1QiKe26amcZoldO2pc8w1&t=638723572529257489'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
