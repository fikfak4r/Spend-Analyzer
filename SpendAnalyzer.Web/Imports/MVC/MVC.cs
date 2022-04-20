using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class BusinessObjects
        {
            public static class SmoothData
            {
                public static class BusinessObjects
                {
                    public static class BaseQry
                    {
                        public const string BaseQryIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/BaseQry/BaseQryIndex.cshtml";
                    }

                    public static class BaseQryLookUp
                    {
                        public const string BaseQryLookUpIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/BaseQryLookUp/BaseQryLookUpIndex.cshtml";
                    }

                    public static class Category
                    {
                        public const string CategoryIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/Category/CategoryIndex.cshtml";
                    }

                    public static class CmpgnCollateral
                    {
                        public const string CmpgnCollateralIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/CmpgnCollateral/CmpgnCollateralIndex.cshtml";
                    }

                    public static class CmpgnCommunication
                    {
                        public const string CmpgnCommunicationIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/CmpgnCommunication/CmpgnCommunicationIndex.cshtml";
                    }

                    public static class CmpgnSegment
                    {
                        public const string CmpgnSegmentIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/CmpgnSegment/CmpgnSegmentIndex.cshtml";
                    }

                    public static class CustomerDetail
                    {
                        public const string CustomerDetailIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/CustomerDetail/CustomerDetailIndex.cshtml";
                    }

                    public static class DerivedQry
                    {
                        public const string DerivedQryIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/DerivedQry/DerivedQryIndex.cshtml";
                    }

                    public static class Fact
                    {
                        public const string FactIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/Fact/FactIndex.cshtml";
                    }

                    public static class FactDimension
                    {
                        public const string FactDimensionIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/FactDimension/FactDimensionIndex.cshtml";
                    }

                    public static class FieldList
                    {
                        public const string FieldListIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/FieldList/FieldListIndex.cshtml";
                    }

                    public static class Jb
                    {
                        public const string JbIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/Jb/JbIndex.cshtml";
                    }

                    public static class JbRn
                    {
                        public const string JbRnIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/JbRn/JbRnIndex.cshtml";
                    }

                    public static class LookUp
                    {
                        public const string LookUpIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/LookUp/LookUpIndex.cshtml";
                    }

                    public static class Pckg
                    {
                        public const string PckgIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/Pckg/PckgIndex.cshtml";
                    }

                    public static class PdQuery
                    {
                        public const string PdQueryIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/PdQuery/PdQueryIndex.cshtml";
                    }

                    public static class TemplateUnit
                    {
                        public const string TemplateUnitIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/TemplateUnit/TemplateUnitIndex.cshtml";
                    }

                    public static class Variable
                    {
                        public const string VariableIndex = "~/Modules/BusinessObjects/SmoothData/BusinessObjects/Variable/VariableIndex.cshtml";
                    }
                }
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string AnalysisByIndividual = "~/Modules/Common/Dashboard/AnalysisByIndividual.cshtml";
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
                public const string SideBar = "~/Modules/Common/Dashboard/SideBar.cshtml";
                public const string TargtedAnalysis = "~/Modules/Common/Dashboard/TargtedAnalysis.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Home
        {
            public const string Index = "~/Views/Home/Index.cshtml";
            public const string Index1 = "~/Views/Home/Index1.cshtml";
            public const string Index1_Copy = "~/Views/Home/Index1_Copy.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
                public const string SpendAnalyzerAccountLogin = "~/Modules/Membership/Account/SpendAnalyzerAccountLogin.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string _SpendAnalyzerLayout = "~/Views/Shared/_SpendAnalyzerLayout.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
            public const string SpendAnalyzerHeadLayout = "~/Views/Shared/SpendAnalyzerHeadLayout.cshtml";
            public const string SpendAnalyzerHeadLayoutForOtherPages = "~/Views/Shared/SpendAnalyzerHeadLayoutForOtherPages.cshtml";
            public const string SpendAnalyzerLayout = "~/Views/Shared/SpendAnalyzerLayout.cshtml";
            public const string SpendAnalyzerLayoutForOtherPages = "~/Views/Shared/SpendAnalyzerLayoutForOtherPages.cshtml";
            public const string SpendAnalyzerLayoutNoNavigation = "~/Views/Shared/SpendAnalyzerLayoutNoNavigation.cshtml";
        }

        public static class Tabs
        {
            public const string Bitcoin = "~/Views/Tabs/Bitcoin.cshtml";
            public const string CampaignDashboard = "~/Views/Tabs/CampaignDashboard.cshtml";
            public const string ChannelAnalytics = "~/Views/Tabs/ChannelAnalytics.cshtml";
            public const string CreditScoring = "~/Views/Tabs/CreditScoring.cshtml";
            public const string Home = "~/Views/Tabs/Home.cshtml";
            public const string Home_Copy = "~/Views/Tabs/Home_Copy.cshtml";
            public const string Models = "~/Views/Tabs/Models.cshtml";
            public const string SpendDashboard = "~/Views/Tabs/SpendDashboard.cshtml";
            public const string SpendDashboard_Copy = "~/Views/Tabs/SpendDashboard_Copy.cshtml";
            public const string Workspace = "~/Views/Tabs/Workspace.cshtml";
        }

    }
}
