import { useApp } from "@/components/AppContext";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CheckCircle, Edit } from "lucide-react";
import { CardHeader, CardTitle } from "../../common/card";
import { Button } from "../../common/button";

const CompanyProfile = () => {
    const { navigateTo } = useApp();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1>Company Profile</h1>
                <Button onClick={() => navigateTo('edit-profile')} className="bg-primary hover:bg-primary/90">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                </Button>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                            TC
                        </div>
                        <div className="flex-1">
                            <h2>TechCorp Vietnam</h2>
                            <p className="text-gray-600 mb-4">Leading software development company in Vietnam</p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="mb-3">Company Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-medium">Industry:</span> Information Technology</p>
                                        <p><span className="font-medium">Company Size:</span> 100-500 employees</p>
                                        <p><span className="font-medium">Founded:</span> 2015</p>
                                        <p><span className="font-medium">Website:</span>
                                            <button className="text-primary hover:underline ml-1">www.techcorp.vn</button>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3">Contact Details</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-medium">Address:</span> District 1, Ho Chi Minh City</p>
                                        <p><span className="font-medium">Phone:</span>
                                            <button className="text-primary hover:underline ml-1">+84 123 456 789</button>
                                        </p>
                                        <p><span className="font-medium">Email:</span>
                                            <button className="text-primary hover:underline ml-1">hr@techcorp.vn</button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-3">About Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    TechCorp Vietnam is a leading software development company specializing in web and mobile applications.
                                    We work with clients across various industries to deliver innovative digital solutions that drive business growth.
                                    Our team of experienced developers, designers, and project managers is passionate about creating high-quality software
                                    that makes a real difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Company Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Competitive salary and bonuses',
                            'Flexible working hours',
                            'Health insurance',
                            'Annual leave and sick leave',
                            'Professional development opportunities',
                            'Modern office environment',
                            'Team building activities',
                            'Work from home options'
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default CompanyProfile;
